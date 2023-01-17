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
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Nosotros</a>
                </li>
                <li>
                    <a href="#">Reservas</a>
                </li>
                <li>
                    <a href="#">Ustedes</a>
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