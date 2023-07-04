<script lang="ts">
    import { onMount } from 'svelte';
    import { editor_data } from '../stores';
  
    onMount(async () => {
      const EditorJS = await import('@editorjs/editorjs');
      // @ts-ignore
      const toolQuote = (await import('@editorjs/quote')).default;       // @ts-ignore
      const toolList = (await import('@editorjs/list')).default;         // @ts-ignore
      const toolTable = (await import('@editorjs/table')).default;       // @ts-ignore
      const toolHeader = (await import('@editorjs/header')).default;     // @ts-ignore
      const toolEmbed  = (await import('@editorjs/embed')).default;      // @ts-ignore
  
      function make_editor(holder_id: string) {
        return new EditorJS.default({
          holder: holder_id,
          placeholder: 'Type something...',
          tools: {
            header: {
              class: toolHeader,
                config: {
                  placeholder: 'Enter a heading',
                }
              },
            list: toolList,
            quote: toolQuote,
            table: toolTable,
            embed: toolEmbed,
          } 
        });
    }

      editor_data["a"] = make_editor('editor1');
      editor_data["b"] = make_editor('editor2');
  
    });
  
  </script>

<div class="editor-container">
  <div class="editor" id="editor1"></div>
  <div class="editor" id="editor2"></div>
</div>
<style> 
  .editor-container {
    display: flex;
    gap: 10%;
  }
  .editor {
    width: 100%;  
    border: thick solid firebrick;
  }
</style>
