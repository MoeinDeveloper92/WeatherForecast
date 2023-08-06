import React, { useState } from 'react'
import { AsyncPaginate } from "react-select-async-paginate"
import { GEO_API_URL } from '../../apiservice/api'
import { geoApiOptions } from '../../apiservice/api'


function Search({ onSearchChange }) {
    const [search, setSearch] = useState(null)




    const loadOptions = (inputValue) => {
        //we are passing this inpit value to fetch to get data
        return fetch(`${GEO_API_URL}/cities?minPopulations=1000000&namePrefix=${inputValue}`, geoApiOptions)
            .then((res) => res.json())
            .then((res) => {
                return {
                    options: res.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name},${city.countryCode}`
                        }
                    })
                }
            })
            .catch((error) => console.log(error))
    }



    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }
    return (
        <AsyncPaginate placeholder="Search for cities"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search

//what we want to get from the search is just lat and lng