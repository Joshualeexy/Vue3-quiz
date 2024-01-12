    import {createRouter, createWebHistory} from "vue-router";
    import home from "../views/Home.vue"
    import doc from "../views/doc.vue"
    const route = createRouter({

        history: createWebHistory(import.meta.env.BASE_URL),
        routes:[
            {
                path: "/",
                name: "home",
                component: home,
            },
            
            {
                path: "/doc",
                name: "doc",
                component: doc
            }
        ]



    })

    export default route
    