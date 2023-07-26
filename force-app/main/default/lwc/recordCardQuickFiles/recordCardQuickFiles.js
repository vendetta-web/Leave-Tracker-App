import { LightningElement, api } from "lwc";
import lightningConfirm  from "lightning/confirm";
export default
class recordCardQuickFiles extends LightningElement {
 @api
 recordId;
 onDeleteAllFilesButtonClick() {
  const confirmation = LightningConfirm.open

  ({
    message: 'Are you sure you want to delete all files?',
    Variant: "headerless",
    Label: "Are you sure you want to delete all files?"
  })
   if (confirmation) {

    }
  }
}