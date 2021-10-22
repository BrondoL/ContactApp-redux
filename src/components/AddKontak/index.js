import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addKontak,
    getListKontak,
    updateKontak,
} from "../../actions/kontakAction";

const AddKontak = () => {
    const [nama, setNama] = useState("");
    const [nohp, setNohp] = useState("");
    const [id, setId] = useState("");

    const { addKontakResult, detailKontakResult, updateKontakResult } =
        useSelector((state) => state.KontakReducer);
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if (id) {
            dispatch(updateKontak({ nama: nama, nohp: nohp, id: id }));
        } else {
            dispatch(addKontak({ nama: nama, nohp: nohp }));
        }
        setNama("");
        setNohp("");
        setId("");
    };

    useEffect(() => {
        if (addKontakResult) {
            dispatch(getListKontak());
        }
    }, [addKontakResult, dispatch]);

    useEffect(() => {
        if (detailKontakResult) {
            setNama(detailKontakResult.nama);
            setNohp(detailKontakResult.nohp);
            setId(detailKontakResult.id);
        }
    }, [detailKontakResult]);

    useEffect(() => {
        if (updateKontakResult) {
            dispatch(getListKontak());
        }
    }, [updateKontakResult, dispatch]);

    return (
        <div>
            <h4>{id ? "Update Kontak" : "Add Kontak"}</h4>
            <form onSubmit={(e) => submitHandler(e)}>
                <input
                    type="text"
                    name="nama"
                    placeholder="Nama..."
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                />
                <input
                    type="text"
                    name="nohp"
                    placeholder="Nomor HP..."
                    value={nohp}
                    onChange={(e) => setNohp(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddKontak;
