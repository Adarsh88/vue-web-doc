<template>
  <div id="app">
    <div class="default-section">
      <div
        id="documenteditor_container_body"
        style="display: flex; position: relative"
      >
        <div style="width: 100%">
          <div
            ref="de_titlebar"
            id="documenteditor_titlebar"
            class="e-de-ctn-title"
          >
            <div
              v-on:keydown="titleBarKeydownEvent"
              v-on:click="titleBarClickEvent"
              class="single-line"
              id="documenteditor_title_contentEditor"
              title="Document Name. Click or tap to rename this document."
              contenteditable="false"
            >
              <label
                v-on:blur="titleBarBlurEvent"
                id="documenteditor_title_name"
                :style="titileStyle"
                >{{ documentName }}</label
              >
            </div>
            <ejs-dropdownbutton
              ref="de-export"
              :style="iconStyle"
              :items="exportItems"
              :iconCss="exportIconCss"
              cssClass="e-caret-hide"
              content="Download"
              v-bind:select="onExport"
              :open="openExportDropDown"
              title="Download this document."
            ></ejs-dropdownbutton>
          </div>
          <ejs-documenteditorcontainer
            id="container"
            ref="doceditcontainer"
            :enableToolbar="true"
            style="height: 600px; width: 100%"
            height="590px"
          ></ejs-documenteditorcontainer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  DocumentEditorContainerPlugin,
  DocumentEditorContainerComponent,
  Toolbar
} from "@syncfusion/ej2-vue-documenteditor";
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
import {
  createSpinner,
  showSpinner,
  hideSpinner
} from "@syncfusion/ej2-popups";
Vue.use(ListViewPlugin);
Vue.use(DocumentEditorContainerPlugin);
Vue.use(DropDownButtonPlugin);
Vue.use(ButtonPlugin);

export default {
  name: 'app',
  data() {
    return {
      message: {
       value :'Hello World'
      }
    };
  },
methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    onExport: function(args) {
      switch (args.item.id) {
        case "word":
          this.save("Docx");
          break;
        case "sfdt":
          this.save("Sfdt");
          break;
      }
    },
    openExportDropDown: function() {
      document
        .getElementById("word")
        .setAttribute(
          "title",
          "Download a copy of this document to your computer as a DOCX"
        );
      document
        .getElementById("sfdt")
        .setAttribute(
          "title",
          "Download a copy of this document to your computer as an SFDT file."
        );
    },
    save: function(format) {
      this.$refs.doceditcontainer.ej2Instances.documentEditor.save(
        this.$refs.doceditcontainer.ej2Instances.documentEditor.documentName ===
          ""
          ? "sample"
          : this.$refs.doceditcontainer.ej2Instances.documentEditor
              .documentName,
        format
      );
    },
    openBtnClick: function() {
      this.$refs.uploadDocument.click();
    },
    documentViewChangeEvent: function(event) {
      debugger;
      console.log("changes", even);
    },

    titleBarKeydownEvent: function(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        document.getElementById(
          "documenteditor_title_contentEditor"
        ).contentEditable = "false";
        if (
          document.getElementById("documenteditor_title_contentEditor")
            .textContent === ""
        ) {
          document.getElementById(
            "documenteditor_title_contentEditor"
          ).textContent = "Document1";
        }
      }
    },
    titleBarBlurEvent: function(args) {
      if (
        document.getElementById("documenteditor_title_contentEditor")
          .textContent === ""
      ) {
        document.getElementById(
          "documenteditor_title_contentEditor"
        ).textContent = "Document1";
      }
      document.getElementById(
        "documenteditor_title_contentEditor"
      ).contentEditable = "false";
      this.$refs.doceditcontainer.ej2Instances.documentEditor.documentName = document.getElementById(
        "documenteditor_title_name"
      ).textContent;
    },
    titleBarClickEvent: function() {
      this.updateDocumentEditorTitle();
    },
    updateDocumentEditorTitle: function() {
      document.getElementById(
        "documenteditor_title_contentEditor"
      ).contentEditable = "true";
      document.getElementById("documenteditor_title_contentEditor").focus();
      window
        .getSelection()
        .selectAllChildren(
          document.getElementById("documenteditor_title_contentEditor")
        );
    },
    onSave: function() {
      let proxy = this;
      let http = new XMLHttpRequest();
      http.open(
        "POST",
        "https://remote-365-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json"
      );
      http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      http.responseType = "json";
      //Serialize document content as SFDT.
      let sfdt = {
        content: proxy.$refs.doceditcontainer.ej2Instances.documentEditor.serialize()
      };
      //Send the sfdt content to server side.
      http.send(JSON.stringify(sfdt));
  },
  mounted() {
    this.$nextTick(function() {
      this.$refs.doceditcontainer.ej2Instances.serviceUrl =
        this.hostUrl + "api/DocumentEditor/";
    });

    document
      .getElementById("export")
      .addEventListener("click", this.onSave.bind(this));

    this.$refs.doceditcontainer.ej2Instances.documentEditor.keyDown = function(
      args
    ) {
      // debugger;
      let keyCode = args.event.which || args.event.keyCode;

      let isCtrlKey =
        args.event.ctrlKey || args.event.metaKey
          ? true
          : keyCode === 17
          ? true
          : false;

      let isAltKey = args.event.altKey
        ? args.event.altKey
        : keyCode === 18
        ? true
        : false;

      // 83 is the character code for 'S'
      if (isCtrlKey && !isAltKey && keyCode === 83) {
        //To prevent default save operation, set the isHandled property to true
        args.isHandled = true;
        this.save("sample", "Docx");
        args.event.preventDefault();
      } else if (isCtrlKey && isAltKey && keyCode === 83) {
        this.save("sample", "Sfdt");
      };

};
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";

@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";

@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";

@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";

@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";

@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";

@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";

@import "../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";

@import "../../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
