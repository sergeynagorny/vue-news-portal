<template>
  <button :class="`btn btn--${type}`">
    <slot></slot>
    <font-awesome-icon v-if="icon" :icon="icon" />
    <!--    <font-awesome-icon icon="arrow-up-wide-short" />-->
    <!--    <font-awesome-icon icon="arrow-down-wide-short" />-->
  </button>
</template>

<script lang="ts">
export default {
  name: "ui-button",
  props: {
    icon: {
      type: String,
    },
    type: {
      default: "primary",
      validator: (val: string) => ["primary", "ghost"].includes(val),
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../app/styles/variables";
@import "../../app/styles/mixins";

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;

  min-height: 32px;
  min-width: 32px;

  font-size: 12px;
  line-height: 1;
  font-weight: bold;

  cursor: pointer;
  border: 1px solid transparent;

  @include md {
    font-size: 16px;
  }

  &:active {
    opacity: 0.8;
  }
}

.btn--primary {
  border-color: $colorPrimary;
  background-color: $colorPrimary;
  color: $colorNeutralLight;

  &:hover {
    background-color: $colorPrimaryLight;
  }
}

.btn--ghost {
  border-color: transparent;
  background-color: transparent;
  color: $colorPrimary;

  &:hover {
    border-color: $colorPrimaryLighter;
  }
}
</style>
