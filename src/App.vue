<template>
<div id="app">
    <ejs-documenteditorcontainer ref="container" height="590px" :serviceUrl='serviceUrl' :enableToolbar='true' > </ejs-documenteditorcontainer>
</div>
</template>

<script>
  import Vue from 'vue';
  import { DocumentEditorContainerPlugin, DocumentEditorContainerComponent,Toolbar } from '@syncfusion/ej2-vue-documenteditor';

  Vue.use(DocumentEditorContainerPlugin);
  export default {
data(){
  return { serviceUrl:'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/' }
},
provide: {
  //Inject require modules.
  DocumentEditorContainer: [Toolbar]
},

  }
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>