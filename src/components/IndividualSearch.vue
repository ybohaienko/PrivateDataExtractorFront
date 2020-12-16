<template>
    <div class="container">
        <h3>Individual private data values</h3>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Search by</th>
                <th scope="col">Input</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td class="vert-aligned">Passport number</td>
                <td>
                    <label>
                        <input type="text" name="varPn" size="15%" @keyup.enter="searchByPassportNumber" v-model="varPassportNumber"
                               placeholder="263023205">
                    </label>
                </td>
                <td class="vert-aligned">
                    <button v-on:click="searchByPassportNumber">Search</button>
                </td>
            </tr>
            <tr>
                <td class="vert-aligned">Tax Id Number</td>
                <td>
                    <label>
                        <input type="text" name="varTi" size="15%" @keyup.enter="searchByTaxIdNumber" v-model="varTaxIdNumber"
                               placeholder="9582649109">
                    </label>
                </td>
                <td class="vert-aligned">
                    <button v-on:click="searchByTaxIdNumber">Search</button>
                </td>
            </tr>
            <tr>
                <td class="vert-aligned">Compound Name and Foreign Passport Number</td>
                <td>
                    <label>
                        <input type="text" name="varFn" size="15%" @keyup.enter="searchByCompoundForeign" v-model="varFirstName"
                               placeholder="Ivan">
                        <input type="text" name="varSn" size="15%" @keyup.enter="searchByCompoundForeign" v-model="varSecondName"
                               placeholder="Rudenko">
                        <input type="text" name="varFan" size="15%" @keyup.enter="searchByCompoundForeign" v-model="varFathersName"
                               placeholder="Ivanovych">
                        <input type="text" name="varPsn" size="15%" @keyup.enter="searchByCompoundForeign" v-model="varForeignPassportNumber"
                               placeholder="AA983672">
                    </label>
                </td>
                <td class="vert-aligned">
                    <button v-on:click="searchByCompoundForeign">Search</button>
                </td>
            </tr>
            <tr>
                <td class="vert-aligned">Compound Name and Phone Number</td>
                <td>
                    <label>
                        <input type="text" name="varFn" size="15%" @keyup.enter="searchByCompoundPhone" v-model="varFirstName"
                               placeholder="Ivan">
                        <input type="text" name="varSn" size="15%" @keyup.enter="searchByCompoundPhone" v-model="varSecondName"
                               placeholder="Rudenko">
                        <input type="text" name="varFan" size="15%" @keyup.enter="searchByCompoundPhone" v-model="varFathersName"
                               placeholder="Ivanovych">
                        <input type="text" name="varPhn" size="15%" @keyup.enter="searchByCompoundPhone" v-model="varPhoneNumber"
                               placeholder="+380500505500">
                    </label>
                </td>
                <td class="vert-aligned">
                    <button v-on:click="searchByCompoundPhone">Search</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                varPassportNumber: '',
                varTaxIdNumber: '',
                varFirstName: '',
                varSecondName: '',
                varFathersName: '',
                varForeignPassportNumber: '',
                varPhoneNumber: '',
            };
        },

        methods: {
            searchByPassportNumber() {
                axios
                    .get(
                        'http://localhost:8079/api/search-by/passport',
                        {
                            params: {
                                value: this.varPassportNumber
                            }
                        }
                    ).then(res => {
                    this.$root.$emit('indAttributes', res.data);
                })
            },
            searchByTaxIdNumber() {
                axios
                    .get(
                        'http://localhost:8079/api/search-by/id-tax',
                        {
                            params: {
                                value: this.varTaxIdNumber
                            }
                        }
                    ).then(res => {
                    this.$root.$emit('indAttributes', res.data);
                })
            },
            searchByCompoundForeign() {
                axios
                    .get(
                        'http://localhost:8079/api/search-by/unique-fpassport',
                        {
                            params: {
                                firstNameValue: this.varFirstName,
                                secondNameValue: this.varSecondName,
                                fathersNameValue: this.varFathersName,
                                foreignPassportNumberValue: this.varForeignPassportNumber
                            }
                        }
                    ).then(res => {
                    this.$root.$emit('indAttributes', res.data);
                })
            },
            searchByCompoundPhone() {
                axios
                    .get(
                        'http://localhost:8079/api/search-by/unique-phone',
                        {
                            params: {
                                firstNameValue: this.varFirstName,
                                secondNameValue: this.varSecondName,
                                fathersNameValue: this.varFathersName,
                                foreignPassportNumberValue: this.varPhoneNumber
                            }
                        }
                    ).then(res => {
                    this.$root.$emit('indAttributes', res.data);
                })
            }
        }
    }
</script>
<style>
</style>
