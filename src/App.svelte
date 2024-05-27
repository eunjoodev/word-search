<script>
  import Main from "./pages/Main.svelte";
  import Maker from "./pages/Maker.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import User from "./pages/User.svelte";
  import Router from "svelte-spa-router";
  import "./css/maker.css"
  import "./css/main.css"
  import "./css/user.css"
  import "./css/reset.css"

  const routes = {
    '/': Maker,
    '/user': User,
    '/main': Main,
    "*":NotFound
  }
</script>

<Router routes={routes}/>

<main></main>

<style></style>