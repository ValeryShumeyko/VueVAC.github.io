import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import UserPage from "@/pages/UserPage";
import About from "@/pages/About";
import PostIdPage from "@/pages/PostIdPage";
import PostPageWithStore from "@/pages/PostPageWithStore";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi";
import Calculate from "@/pages/Calculate";
import LoanRates from "@/pages/LoanRates";
import Inventory from "@/pages/Inventory";
import InventoryCard from "@/pages/InventoryCard";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import Blog from "@/pages/Blog";
import Video from "@/pages/Video";
import OneBlog from "@/pages/OneBlog";
import RequestACar from "@/pages/RequestACar";
import PageNotFound from "@/pages/PageNotFound";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: UserPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
    {
        path: '/composition',
        component: PostPageCompositionApi
    },
    {
        path: '/calculate',
        component: Calculate
    },
    {
        path: '/loan-rates',
        component: LoanRates
    },
    {
        path: '/inventory',
        component: Inventory
    },
    {
        path: '/inventory-card',
        component: InventoryCard
    },
    {
        path: '/terms',
        component: Terms
    },
    {
        path: '/privacy',
        component: Privacy
    },
    {
        path: '/blog',
        component: Blog
    },
    {
        path: '/video',
        component: Video
    },
    {
        path: '/one-blog',
        component: OneBlog
    },
    {
        path: '/request-a-car',
        component: RequestACar
    },
    {
        path: '/:pathMatch(.*)*',
        component: PageNotFound
    }

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
