// add signUp action on submit

import SignupEvent from "@/app/[lang]/components/analytics/signup";
import SignupForm from "@/app/[lang]/components/signup";

export default function Page(){
    return(
        <>
            <SignupEvent />
            <SignupForm />
        </>
        
    )
}