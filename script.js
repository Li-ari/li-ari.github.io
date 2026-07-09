const translations = {
  en: {
    "meta.title": "Oh Yuhwan | Personal Blog",
    "meta.description": "Oh Yuhwan's personal blog.",
    "meta.ogDescription": "A minimal personal blog for Oh Yuhwan.",
    "language.label": "Language",
    "nav.label": "Main navigation",
    "nav.home": "Home",
    "nav.info": "Info.",
    "nav.posts": "Posts",
    "profile.name": "Oh Yuhwan",
    "profile.tagline": "For the DAY Blessed by God",
    "profile.photoAlt": "Profile photo of Oh Yuhwan",
    "profile.locationLabel": "Location",
    "profile.locationValue": "Seongdong-gu, Seoul",
    "profile.emailLabel": "Email",
    "profile.emailAria": "Copy email address hhaugustin893@gmail.com",
    "profile.emailTitle": "Click to copy",
    "home.title": "Welcome to my personal blog",
    "home.nickname": "My nickname is Liari.",
    "home.lol":
      "In League of Legends, I mainly play as a bottom laner with Zeri.",
    "info.title": "Info.",
    "info.education.degree":
      "B.S. in Mathematics in Konkuk University, Seoul, South Korea",
    "info.education.period": "March 2020 – Expected February 2027",
    "info.education.service":
      "(September 2020 - March 2022 : Mandatory military service)",
    "info.airborne.title": "Airborne #845",
    "info.airborne.note": "(January 2021, during military service)",
    "posts.title": "Posts",
    "copy.success": "{email} copied to clipboard.",
    "copy.error":
      "Could not copy automatically. Please select the email address manually.",
  },
  ko: {
    "meta.title": "오유환 | 개인 블로그",
    "meta.description": "오유환의 개인 블로그입니다.",
    "meta.ogDescription": "오유환의 간단한 개인 블로그입니다.",
    "language.label": "언어",
    "nav.label": "주요 메뉴",
    "nav.home": "홈",
    "nav.info": "정보",
    "nav.posts": "포스트",
    "profile.name": "오유환",
    "profile.tagline": "For the DAY Blessed by God",
    "profile.photoAlt": "오유환 프로필 사진",
    "profile.locationLabel": "거주지",
    "profile.locationValue": "서울 성동구",
    "profile.emailLabel": "이메일",
    "profile.emailAria": "이메일 주소 hhaugustin893@gmail.com 복사",
    "profile.emailTitle": "클릭해서 복사",
    "home.title": "안녕하세요, 오유환 입니다.",
    "home.nickname": "제 닉네임은 리아리 입니다.",
    "home.lol": "리그 오브 레전드에서는 제리로 바텀 라이너를 주로 플레이합니다.",
    "info.title": "정보",
    "info.education.degree": "건국대학교 수학과 학사, 서울, 대한민국",
    "info.education.period": "2020년 3월 – 2027년 2월 졸업 예정",
    "info.education.service": "(September 2020 - March 2022 : 병역 의무)",
    "info.airborne.title": "공수 기본 #845",
    "info.airborne.note": "(2021년 1월, 군 복무 중)",
    "posts.title": "포스트",
    "copy.success": "{email} 주소가 복사되었습니다.",
    "copy.error":
      "자동으로 복사하지 못했습니다. 이메일 주소를 직접 선택해 주세요.",
  },
};

const defaultLanguage = "en";
const languageStorageKey = "personal-homepage-language";
let currentLanguage = defaultLanguage;

const emailCopyLinks = document.querySelectorAll("[data-copy-email]");
const copyStatus = document.querySelector("[data-copy-status]");
const viewButtons = document.querySelectorAll("[data-view-target]");
const contentPanels = document.querySelectorAll("[data-content-panel]");
const languageButtons = document.querySelectorAll("[data-language]");

function translate(key) {
  return translations[currentLanguage][key] ?? translations.en[key] ?? "";
}

function updateTranslatedText() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute(
      "aria-label",
      translate(element.dataset.i18nAriaLabel),
    );
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.setAttribute("title", translate(element.dataset.i18nTitle));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", translate(element.dataset.i18nAlt));
  });

  document.documentElement.lang = currentLanguage === "ko" ? "ko" : "en";
  document.title = translate("meta.title");
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", translate("meta.description"));
  document
    .querySelector('meta[property="og:title"]')
    ?.setAttribute("content", translate("meta.title"));
  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute("content", translate("meta.ogDescription"));
}

function updateLanguageButtons() {
  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function saveLanguage(language) {
  try {
    window.localStorage.setItem(languageStorageKey, language);
  } catch {
    // Ignore storage failures; the visible language still changes.
  }
}

function getSavedLanguage() {
  try {
    return window.localStorage.getItem(languageStorageKey);
  } catch {
    return null;
  }
}

function setLanguage(language) {
  currentLanguage = translations[language] ? language : defaultLanguage;
  updateTranslatedText();
  updateLanguageButtons();
  emailCopyLinks.forEach((emailCopyLink) => {
    emailCopyLink.classList.remove("is-copied");
  });

  if (copyStatus) {
    copyStatus.textContent = "";
  }

  saveLanguage(currentLanguage);
}

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

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language);
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
        copyStatus.textContent = translate("copy.success").replace(
          "{email}",
          email,
        );
      }

      window.setTimeout(() => {
        emailCopyLink.classList.remove("is-copied");

        if (copyStatus) {
          copyStatus.textContent = "";
        }
      }, 2200);
    } catch {
      if (copyStatus) {
        copyStatus.textContent = translate("copy.error");
      }
    }
  });
});

setLanguage(getSavedLanguage() ?? defaultLanguage);
