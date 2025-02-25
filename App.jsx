
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './src/Layout'
import Home from "./src/components/Home/Home"
import TopRated from "./src/Navlinks/TopRated/TopRated"
import KidsWear from "./src/Navlinks/KidsWear/KidsWear"
import MensWear from "./src/Navlinks/MensWear/MensWear"
import Electronic from "./src/Navlinks/Electronic/Electronic"
import TrandingProducts from "./src/Navlinks/TrandingProducts/TrandingProducts"
import BestSelling from "./src/Navlinks/BestSelling/BestSelling"
import TopQuality from "./src/Navlinks/TopQuality/TopQuality"



  export const router =  createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Layout />}> 
        <Route path="" element={<Home />} />
        <Route path="toprated" element={<TopRated />} />
        <Route path="kidswear" element={<KidsWear />} />
        <Route path="menswear" element={<MensWear />} />
        <Route path="electronic" element={<Electronic />} />
        <Route path="trandingproducts" element={<TrandingProducts />} />
        <Route path="bestSelling" element={<BestSelling />} />
        <Route path="topquality" element={<TopQuality />} />
        
        </Route>
      )
    )