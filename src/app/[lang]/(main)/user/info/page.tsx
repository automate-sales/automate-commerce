// add signUp action on submit

import SignupEvent from "@/app/[lang]/components/analytics/signup";
import SignupForm from "@/app/[lang]/components/signup";
import { getCurrentUser } from "@/utils/auth";

export default async function Page(){
    const user = await getCurrentUser()
    return(
        <>
            <SignupEvent />
            <SignupForm user={user}/>
        </>
        
    )
}