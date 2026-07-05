const yearTarget = document.querySelector("[data-current-year]");

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear().toString();
}

const emailCopyLinks = document.querySelectorAll("[data-copy-email]");
const copyStatus = document.querySelector("[data-copy-status]");

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
    const defaultLabel = emailCopyLink.dataset.defaultLabel || "Copy Email";

    if (!email) {
      return;
    }

    try {
      await copyText(email);
      emailCopyLink.textContent = "Copied";

      if (copyStatus) {
        copyStatus.textContent = `${email} copied to clipboard.`;
      }

      window.setTimeout(() => {
        emailCopyLink.textContent = defaultLabel;

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
