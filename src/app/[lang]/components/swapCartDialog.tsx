'use client'

import { swapCarts } from "@/app/actions";
import { useEffect, useRef } from "react";

function SwapCartDialog(
    {
        currentCartId,
        newCartId,
        leadId
    }: {
        currentCartId: string,
        newCartId: string,
        leadId: string
    }
) {
  const ref = useRef();

  return (
    <div className="fixed top-0 z-50 w-screen h-screen flex flex-col justify-center items-center bg-gray-800 bg-opacity-75">
        <div className="p-8 bg-white rounded-sm">
            <p className="py-3">Warning: you have an active shopping cart with items. clicking on replace will deactivate this cart.</p>
            <div className="flex justify-center gap-3">
            <button className="p-2 rounded-sm bg-blue-400" onClick={() => console.log('cancel')}>Cancel</button>
                <button className="p-2 rounded-sm bg-red-400" onClick={() => swapCarts(currentCartId, newCartId, leadId)}>Replace</button>
            </div>
        </div>
    </div>
  );
}

export default SwapCartDialog;