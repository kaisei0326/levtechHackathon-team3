import React, { Component } from "react";
import { FileInput } from '@mantine/core';
import axios from "axios";
import { useState } from "react";

export const Photo = () => {
    const [image, setImage] = useState()

    const getImage = (e) => {
            if(!e.target.files) return
            const img = e.target.files[0]
            setImage(img)
    }

    const submitImage = () => {
        const header = { headers: {
         'Content-Type': 'multipart/form-data',
         "Access-Control-Allow-Origin": "*",
          }}
          console.log(image);
         const formData = new FormData();
         formData.append(
            'image',
            image
         );
         const postImageUri = 'https://tadanodomain.gq:9090/v1/images?auniq=03349207d2913dd783aee5c74012bd973dd7d1999881b581492e6de8e2e459da'
         axios.post(postImageUri, formData, header)
         .then(res => {
           console.log(res);
         }).catch(err => {

         })
    }

    return (
        <form>
        <input id="img" type="file" accept="image/*,.png,.jpg,.jpeg,.gif" onChange={getImage}/>
        <input type="button" value="保存" onClick={submitImage}/>
        </form>
    );
}