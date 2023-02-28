<template>
    <header class="nav-bar">
        <div class="center-header">
            <img src="../assets/logo.png" class="logo-app" alt="logo de VUE">
            <span id="brand">
                <strong>My APP</strong> Vue
            </span>
        </div>
        <nav>
            <ul>
                <li>
                    <router-link to="/home">Inicio</router-link>
                </li>
                <li>
                    <router-link to="/about">Nosotros</router-link>
                </li>
            </ul>
        </nav>
    </header>

</template>

<script>
export default {
    name: 'HeaderComponent'
}

</script>