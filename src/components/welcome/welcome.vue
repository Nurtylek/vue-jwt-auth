<template>
    <div id="welcome">
        <h1>JWT Auth Vue!</h1>
        <div class="cta">
            <router-link class="cta__link" to="/signin">Sign In</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "welcome"
}
</script>

<style scoped>
#welcome {
    width: 80%;
    margin: auto;
}

h1 {
    text-align: center;
}

p {
    text-align: center;
}

.cta {
    width: 300px;
    margin: auto;
    text-align: center;
}

.cta .cta__link {
    margin: 10px;
    text-decoration: none;
    display: inline-block;
    border: 1px solid #521751;
    border-radius: 3px;
    width: 100px;
    padding: 10px;
    box-sizing: border-box;
    color: #521751;
}

.cta .cta__link:hover,
.cta .cta__link:active {
    background-color: #521751;
    color: white;
}
</style>
