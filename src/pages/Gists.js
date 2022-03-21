import { CircularProgress } from "@material-ui/core";
import { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL_PUBLIC } from "..//constants/common";
import { getAllGists } from "../store/gists/action";


const Gists = () => {    
    const { gists, request, error } = useSelector(state => state.gists);
    const dispatch = useDispatch();
    const requestGists = () => {
        dispatch(getAllGists());
    };

    useEffect(() => {
        requestGists();
    }, [])
    const renderGist = useCallback(
        (gist) => <li key={gist.id}>{gist.description || 'No description'}</li>,
        []);

        if (request) {
            return <CircularProgress />
        }

    return (<div>{error && (<div><h3>Error</h3><button onClick={requestGists}>Retry</button></div>)}<ul>{gists.map(renderGist)}</ul></div>)
}

export default Gists