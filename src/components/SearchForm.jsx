const SearchForm = ({onSubmitForm,onChangeForm,value}) => {
    return (
        <form action="" onSubmit={onSubmitForm}>
            <input type="text" placeholder="Enter movie name" onChange={onChangeForm} value={ value}/>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm;