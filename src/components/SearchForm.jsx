import PropTypes from 'prop-types';
import { FormSearch, InputSearch, ButtonSubmit } from "../styles.component";
const SearchForm = ({ onSubmitForm, onChangeForm, value }) => {
    return (
        <FormSearch action="" onSubmit={onSubmitForm}>
            <InputSearch type="text" placeholder="Enter movie name" onChange={onChangeForm} value={ value}/>
            <ButtonSubmit type="submit">Search</ButtonSubmit>
        </FormSearch>
    )
}

SearchForm.propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
    onChangeForm: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}
export default SearchForm;