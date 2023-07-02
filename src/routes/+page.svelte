<script lang="ts">
    import { onMount } from 'svelte';
    let editor: any;
  
    onMount(async () => {
      const EditorJS = await import('@editorjs/editorjs');
      const Quote = (await import('@editorjs/quote')).default;
      const List = (await import('@editorjs/list')).default;
      const Table = (await import('@editorjs/table')).default;
      const Header = (await import('@editorjs/header')).default;
  
  
      editor = new EditorJS.default({
        holder: 'editor',
        placeholder: 'Type something...',
        tools: {
          header: Header,
          list: List,
          quote: Quote,
          table: Table,
        } 
      });
    });
  
  </script>
  
  <div id="editor"></div>