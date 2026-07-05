const emailCopyLinks = document.querySelectorAll("[data-copy-email]");
const copyStatus = document.querySelector("[data-copy-status]");
const viewButtons = document.querySelectorAll("[data-view-target]");
const contentPanels = document.querySelectorAll("[data-content-panel]");

function showContentPanel(panelId) {
  contentPanels.forEach((panel) => {
    const isActive = panel.id === panelId;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });

  viewButtons.forEach((button) => {
    const isActive = button.dataset.viewTarget === panelId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const panelId = button.dataset.viewTarget;

    if (panelId) {
      showContentPanel(panelId);
    }
  });
});

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall back for browsers that expose the API but block it by policy.
    }
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.setAttribute("aria-hidden", "true");
  textArea.style.position = "fixed";
  textArea.style.top = "-999px";
  textArea.style.left = "-999px";
  document.body.append(textArea);
  textArea.focus();
  textArea.select();
  textArea.setSelectionRange(0, text.length);

  try {
    const copied = document.execCommand("copy");
    if (!copied) {
      throw new Error("Copy command failed");
    }
  } finally {
    textArea.remove();
  }
}

emailCopyLinks.forEach((emailCopyLink) => {
  emailCopyLink.addEventListener("click", async (event) => {
    event.preventDefault();

    const email = emailCopyLink.dataset.copyEmail;

    if (!email) {
      return;
    }

    try {
      await copyText(email);
      emailCopyLink.classList.add("is-copied");

      if (copyStatus) {
        copyStatus.textContent = `${email} copied to clipboard.`;
      }

      window.setTimeout(() => {
        emailCopyLink.classList.remove("is-copied");

        if (copyStatus) {
          copyStatus.textContent = "";
        }
      }, 2200);
    } catch {
      if (copyStatus) {
        copyStatus.textContent =
          "Could not copy automatically. Please select the email address manually.";
      }
    }
  });
});
