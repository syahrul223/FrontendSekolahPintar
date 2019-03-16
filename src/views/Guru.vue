<template>
    <div>
        <b-container class="bv-example-row bv-example-row-flex-cols">
            <b-row class="justify-content-md-center">
                <h2>Daftar Guru</h2>            
            </b-row>
            <br>
            <b-row align-v="center" class="justify-content-md-center">
                <b-card>
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <tr>
                                <th>No</th>
                                <th>NIP</th>
                                <th>Nama Lengkap</th>
                                <th>Jenis Kelamin</th>
                                <th>Tanggal Lahir</th>
                                <th colspan="2">Action</th>
                            </tr>
                            <tr v-for="(guru, i) in data_guru" :key="i">
                                <td>{{ i + 1 }}</td>
                                <td>{{ guru.nip }}</td>
                                <td>{{ guru.nama_guru }}</td>
                                <td>{{ guru.jenis_kelamin }}</td>
                                <td>{{ guru.tgl_lahir }}</td>
                                <td>
                                    <router-link :to="'/guru/' + guru.id">
                                        <b-button variant="warning" v-b-tooltip.hover title="Ubah Data"><font-awesome-icon icon="edit" ></font-awesome-icon></b-button>
                                    </router-link>
                                </td>
                                <td>
                                    <b-button @click="hapus(guru.id)" variant="danger" v-b-tooltip.hover title="Hapus"><font-awesome-icon icon="trash"></font-awesome-icon></b-button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </b-card>
                <br>
            </b-row>
            <hr>
            <b-row class="justify-content-md-center">
                <router-link to="/guru/create">
                    <b-button variant="success" v-b-tooltip.hover title="Tambah Data Guru"><font-awesome-icon icon="plus-circle"/></b-button>
                </router-link>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { api } from '@/helper/api'

export default {
    name: 'guru',
    data () {
        return {
            data_guru: []
        }
    },
    mounted () {
        this.get()
    },
    methods: {
        get() {
            api.get('guru').then(res => {
                if(res.data.status === 'success'){
                    this.data_guru = res.data.result
                } else {
                    console.log(res.data.message)
                }
            }).catch(err => {
                console.log(err)
            })
        },
        hapus(id) {
            api.delete('guru/' + id).then(res => {
                if(res.data.status === 'success'){
                    this.get()
                } else {
                    console.log(res.data.message)
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

