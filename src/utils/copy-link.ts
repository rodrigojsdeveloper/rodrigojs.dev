import { notification } from "@/components/notification";
import { translate } from "@/i18n";

export const copyLink = () => {
  navigator.clipboard
    .writeText("https://rodrigojs.dev")
    .then(() => {
      notification({
        description: translate("notification.copy_link.success"),
      });
    })
    .catch(() => {
      notification({
        description: translate("notification.copy_link.error"),
        error: true,
      });
    });
};
