(function () {
    'use strict';
    fetch('recipe.json')

        .then(r => r.json())
        .then(recipes => {
            console.log(recipes);
            const mydiv = $("#radioDiv");
            recipes.forEach(rec => {
                mydiv.append(`<input type='radio' name='food' value=${rec}>${rec}</input>`);
            });
            $('input').change(function () {
                console.log(this.value);

                $('#foodDiv').empty();

                const foodFile = `${this.value}.json`;
                fetch(foodFile)
                    .then(response => response.json())
                    .then(data => {

                        let food = "You chose: ";
                        food += data.Name;
                        food += ". The ingridents are: ";
                        food += data.Ing;

                        $('#foodDiv').append(food);
                        $("#s").attr("src", data.Url);
                    });
            });
        })
        .catch(err => console.error(err));
}());