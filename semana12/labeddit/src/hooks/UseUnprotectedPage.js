import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToFeed } from "../routes/Coordinator";

export const UseUnprotectedPages = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            goToFeed(history)
        }
    }, [history])

};