<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="flexbox">
                    <Board id="board-1">
                        <Card id="card-1" draggable="true">
                            Card 1
                        </Card>
                    </Board>
                    <Board id="board-2">
                        <Card id="card-2" draggable="true">
                            Card 2
                        </Card>
                    </Board>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Board from './Board.vue'
    import Card from './Card.vue'
    export default {
        components: {
            Board,
            Card
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
<style scoped>
.flexbox {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 768px;
    height: 500px;
    padding: 15px;
}
.flexbox .board {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    background-color: #313131;
    padding: 15px;
}
</style>
