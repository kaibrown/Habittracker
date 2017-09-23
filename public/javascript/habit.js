$(document).ready(function () {
    var habitInput = $("#new-habit-name")
    var makeButton = $("#makebutton")
    $(document).on("submit", "#habit-form", handleHabitFormSubmit)

    function handleHabitFormSubmit(event) {
        event.preventDefault();
        console.log(event)
        console.log(habitInput)
        if (!habitInput.val().trim()) {
            return;
        }
        upsertHabit(
            {
                name: habitInput
                    .val()
                    .trim(),
                make: 1,
                UserId: 1
            },
        );
    }
    function upsertHabit(habitData) {
        $.post("/api/createhabit", habitData)
    }
});