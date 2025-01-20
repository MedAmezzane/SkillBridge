"use client"

import React from "react";
import StoreProvider from "@/state/redux";

const Providres = ({ children }:{ children: React.ReactNode }) => {
    return <StoreProvider>{children}</StoreProvider>
}

export default Providres;
