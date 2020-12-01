export default {
    data() {
        return {
            pagination: {
                page: 1,
                size: 10,
                total: 0,
            },
        };
    },
    methods: {
        onSizeChange(size) {
            if (size !== this.pagination.size) {
                this.pagination.size = size;
                this.loadData();
            }
        },
        onPageChange(page) {
            if (page !== this.pagination.page) {
                this.pagination.page = page;
                this.loadData()
            }
        },
        resetPagination() {
            this.pagination = {
                page: 1,
                size: 10,
                total: 0,
            };
        }
    },
}