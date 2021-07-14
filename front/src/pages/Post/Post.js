import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { FooterComponent } from "../../components/footer/Footer"
import useForm from "../../Hook/useForm";
import { PostApi } from "./PostApi";
import { Form, Buttons, Main, DropDownLabelSelect , Answer } from './style';
import {useProtectedPage} from '../../Hook/useProtectedPage';


export default function Post() {
    useProtectedPage();

    const [form, onChange, clear] = useForm({ subtitle: '', file_photo: '', data_criacao: '', tags_name: '' })
    const [allTagsBd, setAllTagsBd] = useState([])
    const [answer, setAnswer] = useState("")
    const history = useHistory();

    const getAllTags = async () => {
        try {
            const response = await axios.get(`https://projeto-full-stack-backend.herokuapp.com/image/allTags`)
            setAllTagsBd(response.data)

        } catch (error) {
            alert(error.response.data.error);
        }
    }

    const getCurrentData = () => {
        var data = new Date();
        var dia = String(data.getDate()).padStart(2, '0');
        var mes = String(data.getMonth() + 1).padStart(2, '0');
        var ano = data.getFullYear();
        return form.data_criacao = ano + '-' + mes + '-' + dia;
    }


    const dropDownTags = allTagsBd && allTagsBd.allTags && allTagsBd.allTags.map((tag) => {
        return (
            <option key={tag.tag_name} value={tag.tag_name}>{tag.tag_name}</option>
        )
    })


    const onSubmitForm = (event) => {
        event.preventDefault()
        getCurrentData();
        PostApi(form)
        setAnswer("Postagem criada com sucesso")
        clear()
    }

    useEffect(() => {
        getAllTags()
    }, [])

    return (
        <Main>
            <h1>Criar Postagem</h1>
            <Form onSubmit={onSubmitForm}>
                <TextField
                    autoFocus
                    name={'subtitle'}
                    value={form.subtitle}
                    onChange={onChange}
                    size="normal"
                    required
                    fullWidth
                    borderColor='green'
                    label="Legenda"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    autoFocus
                    name={'file_photo'}
                    value={form.file_photo}
                    onChange={onChange}
                    size="normal"
                    required
                    fullWidth
                    label="EndereçoDaFoto.jpg"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <div class="field">
                    <DropDownLabelSelect>
                        <label>SELECIONE UMA TAG</label>
                        <select class="ui dropdown" name="tags_name" value={form.tags_name} onChange={onChange}>
                            {dropDownTags}
                        </select>
                    </DropDownLabelSelect>
                </div>
                <Answer>{answer}</Answer>
                <Buttons>
                    <Button
                        type='submit'
                        variant="contained"
                        color="primary"
                        style={{ width: 350, height: 52 }}
                        bg='brand.200'>Criar Postagem</Button>
                </Buttons>
            </Form>
            <FooterComponent/>
        </Main>
    )
}
