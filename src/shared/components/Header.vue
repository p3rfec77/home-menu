<script setup lang="ts"></script>

<template>
  <header :class="$style.header">
    <h1 :class="$style.heading">Home Menu</h1>
    <nav :class="$style.navbar">
      <button :class="$style.nav_btn">Войти</button>
      <button :class="$style.nav_btn">Регистрация</button>
    </nav>
  </header>
</template>

<style scoped module lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
  padding: 20px 75px;
  background-color: var(--secondary-bg-color);
  color: var(--main-text-color);

  .heading {
    font-size: 36px;
  }

  .navbar {
    display: flex;
    gap: 20px;

    .nav_btn {
      background-color: transparent;
      border: none;
      border-bottom: 2px solid transparent;
      font-size: 24px;
      font-weight: 500;
      cursor: pointer;
      position: relative;

      &::before {
        content: "";
        width: 0;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: width 0.2s;
        background-color: var(--main-text-color);
      }

      &:hover::before {
        width: 100%;
      }
    }
  }
}
</style>
