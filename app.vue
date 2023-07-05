<template>
  <div>
    <div
      class=""
      style="
        padding: 1rem;
        background-color: #222;
        color: white;
        display: flex;
        justify-content: end;
      "
    >
      <button
        type="button"
        class=""
        style="
          padding: 8px 16px;
          background-color: #333;
          color: white;
          border-radius: 8px;
        "
      >
        <OlvyWidget :config="{ workspaceAlias: 'olvysdktest' }">
          <div id="olvy-whats-new">Announcement Widget</div>
        </OlvyWidget>
      </button>
    </div>

    <NuxtWelcome />
  </div>
</template>

<script setup>
import { OlvyWidget } from "@olvyhq/widget-vue";
</script>
