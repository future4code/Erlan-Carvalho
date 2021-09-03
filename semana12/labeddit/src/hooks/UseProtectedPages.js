import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goBackToTheLogInPage } from "../routes/Coordinator";

export const UseProtectedPages = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            goBackToTheLogInPage(history)
        }
    }, [history])

};