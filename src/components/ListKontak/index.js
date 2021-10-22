import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
    deleteKontak,
    detailKontak,
    getListKontak,
} from "../../actions/kontakAction";

const ListKontak = () => {
    const {
        getListKontakResult,
        getListKontakLoading,
        getListKontakError,
        deleteKontakResult,
    } = useSelector((state) => state.KontakReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListKontak());
    }, [dispatch]);

    useEffect(() => {
        if (deleteKontakResult) {
            dispatch(getListKontak());
        }
    }, [dispatch, deleteKontakResult]);

    return (
        <div>
            <h4>List Kontak</h4>
            {getListKontakResult ? (
                getListKontakResult.map((kontak) => {
                    return (
                        <p key={kontak.id}>
                            {kontak.nama} - {kontak.nohp} -{" "}
                            <button
                                onClick={() => dispatch(detailKontak(kontak))}
                            >
                                Edit
                            </button>
                            <button
                                style={{ marginLeft: "5px" }}
                                onClick={() =>
                                    dispatch(deleteKontak(kontak.id))
                                }
                            >
                                Hapus
                            </button>
                        </p>
                    );
                })
            ) : getListKontakLoading ? (
                <p>Loading...</p>
            ) : getListKontakError ? (
                getListKontakError
            ) : (
                "Data Kosong"
            )}
        </div>
    );
};

export default ListKontak;
