<template>
    <div class="min-h-screen flex justify-center items-center bg-gray-light">
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h1 class="text-2xl font-bold text-red mb-4">記帳系統</h1>
            <form @submit.prevent="submitTransaction">
                <input type="text" v-model="transaction.title" placeholder="描述" class="mb-4 p-2 border border-gray-dark w-full" />
                <input type="number" v-model="transaction.amount" placeholder="金額" class="mb-4 p-2 border border-gray-dark w-full" />
                <button type="submit" class="bg-red text-white p-2 w-full rounded">記帳</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            transaction: {
                title: '',
                amount: 0,
            },
        };
    },
    methods: {
        submitTransaction() {
            console.log('提交交易:', this.transaction);
        },
    },
};
</script>