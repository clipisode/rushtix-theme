import { GetCustomDataDescriptorsFn, SiteData } from "@clipisode/theme";

export const getCustomDataDescriptors: GetCustomDataDescriptorsFn = () => {
  return [];
};

export const siteData: SiteData = {
  customCssKey: "styles.css",
  meta: {
    // values: TOPIC_TITLE
    title: "TOPIC_TITLE • RushTix",
    description: "Send a video request (no app needed) for TOPIC_TITLE",
  },
  introScreen: {
    // values: SOCIAL_NETWORK, BROWSER_NAME, INVITATION_DISPLAY_NAME, EXTRA_TERMS, BRAND_SLUG, TERMS_SLUG, TERMS_NAME, BRAND_NAME
    recordButtonLabel: "Record a video request",
    readyDescription: `
        <h1 class="text-center text-black font-heading font-extrabold p-0 text-2xl">Hang on</h1>
        <p class="text-left text-gray-700 text-sm py-3">The SOCIAL_NETWORK browser doesn’t support direct camera uploads on Android.</p>
        <h1 class="text-center text-black font-heading font-extrabold p-0 text-2xl">Good news</h1>
        <p class="text-left text-gray-700 text-sm py-3">Just tap the three dots menu and choose <span class="whitespace-nowrap">“Open in BROWSER_NAME”</span> to send your request to <span class="whitespace-nowrap">INVITATION_DISPLAY_NAME</span>.</p>
        `,
  },
  introScreenDesktop: {
    // values: THEME_FILE_ROOT, TOPIC_TITLE, QR_CODE, INVITATION_DISPLAY_NAME, INVITATION_URL
    markup: `
      <div class="flex flex-col items-center justify-between text-center flex-grow ">
        <div class="flex flex-col items-center justify-between text-center">
          <div class="m-2">
            <a href="https://rushtix.com">
              <img src="THEME_FILE_ROOT/icon.png" class="w-12 h-12" />
            </a>
          </div>
          <h1 class="font-heading mt-3 mb-6 text-xl md:text-2xl max-h-28 md:max-h-32 overflow-hidden">TOPIC_TITLE</h1>
        </div>
        <div class="m-8">QR_CODE</div>
        <div>
          <p class="m-4 mb-6 text-base">Point your camera at the QR code to open this link on your
          phone and send <span class="whitespace-nowrap"><b>INVITATION_DISPLAY_NAME</b></span> <span class="whitespace-nowrap">a video request.</span></p>
        </div>
    </div>`,
  },
  successScreen: {
    // values: INVITATION_DISPLAY_NAME, THEME_FILE_ROOT
    markup: `
            <div class="flex flex-grow flex-col items-center justify-between">
                <div>
                    <p class="mt-12 mb-12 mx-3 text-center">Nice work! Your video request for <span class="whitespace-nowrap"><b>INVITATION_DISPLAY_NAME</b> was sent.</span></p>
                    <div class="m-2">
                      <a href="https://rushtix.com">
                        <img src="THEME_FILE_ROOT/logo.png" style="width: 220px; height: 39px;" />
                      </a>
                      <p class="mt-12 mb-12 mx-3 text-center">You'll receive your shoutout video from <span class="whitespace-nowrap"><b>INVITATION_DISPLAY_NAME</b> via email when <span class="whitespace-nowrap">it's ready.</span></span></p>
                    </div>
                </div>
            </div>
        `,
  },
};
