import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { countries } from '../../api';

const CountryPicker = () => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(()=> {
        const fetchCountries = async () => {
            setFetchedCountries(await countries);
        }

        fetchCountries();
    },[setFetchedCountries]);

    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect>
                    <option value="global">Global</option>
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker;