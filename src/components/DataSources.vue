<template>
    <div class="container">
        <h3>Source crawl processes</h3>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Service</th>
                <th scope="col">Token</th>
                <th scope="col">Action</th>
                <th scope="col">Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td class="vert-aligned">DropBox</td>
                <td>
                    <label>
                        <input type="text" name="token" size="70%" @keyup.enter="enableCrawl" v-model="accessToken"
                               placeholder="XLSKbV26LAFFBXsftNaKl2gBI6d5utRAk8bmszo2TFoay229WrqQzi08ZYxgqO86">
                    </label>
                </td>
                <td class="vert-aligned">
                    <button v-on:click="enableCrawl">Start crawl</button>
                </td>
                <td class="vert-aligned">{{statusMessage}}</td>
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
                statusMessage: null,
                actionStatus: null,
                accessToken: ''
            };
        },
        created: function () {
            setInterval(() => {
                axios
                    .get('http://localhost:8079/api/dropbox/status')
                    .then(res => {
                        this.statusMessage = res.data.statusMessage;
                    })
            }, 1000);
        },
        methods: {
            enableCrawl() {
                axios
                    .post(
                        'http://localhost:8079/api/dropbox/start',
                        {
                            "token": this.accessToken
                        },
                    )
            }
        }
    }
</script>
<style>
</style>
