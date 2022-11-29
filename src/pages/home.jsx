import React, { useRef } from 'react';
import {firestore} from "../firebase";
import { addDoc, collection} from "@firebase/firestore";

function Home(props) {
    const messageRef = useRef();
    const ref = collection(firestore, "cau-hoi");

    const handleSave = async (e) => {
        e.preventDefault();
        console.log(messageRef.current.value);

        let data = {
            cauHoi: messageRef.current.value,
        };

        try{
            addDoc(ref, data);
        } catch(e){
            console.log(e);
        }
    }
    return (
        <div>
            <form onSubmit={handleSave}>
                <span>sdfsdf</span>
                <input type="text" ref={messageRef} />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default Home;