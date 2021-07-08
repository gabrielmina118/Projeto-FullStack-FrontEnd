import React, { useState } from 'react'
import useForm from '../../Hook/useForm';
import TextField from '@material-ui/core/TextField';
import { Main, Form, SearchtagsDiv, FeedCard, ImagemFeed ,TagAlreadExist} from './style'
import axios from 'axios';

const SearchTag = () => {

    const [form, onChange, clear] = useForm({ search: '' })
    const [tagsPhotos, setTagsPhotos] = useState([]);

    const getData = async (body) => {
        try {
            const response = await axios.get(`https://projeto-full-stack-backend.herokuapp.com/image/allTags/${body.search}`, {
                headers: {
                    Authorization: window.localStorage.getItem("token")
                }
            })
            setTagsPhotos(response.data)
        } catch (error) {
            alert(error.response.data.error);
        }
    }


    const onSubmitForm = (event) => {
        event.preventDefault();
        getData(form);
    }


    return (
        <Main>
            <h1>Search</h1>
            <Form onSubmit={onSubmitForm}>
                <TextField
                    autoFocus
                    name={'search'}
                    value={form.search}
                    onChange={onChange}
                    size="normal"
                    required
                    fullWidth
                    borderColor='green'
                    label="Search All Photos"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />

            </Form>
            <TagAlreadExist>
                <p>ANIMES</p>
                <p>ANIMES</p>
                <p>ANIMES</p>
            </TagAlreadExist>
            <h2>All results</h2>
            <SearchtagsDiv>
                {tagsPhotos && tagsPhotos.tagsWihtPhoto && tagsPhotos.tagsWihtPhoto.map((tag) => {
                    return (
                        <FeedCard key={tag.file_photo}>
                            <ImagemFeed src={tag.file_photo} />
                        </FeedCard>
                    )
                })}
            </SearchtagsDiv>
        </Main>

    )
}
export default SearchTag