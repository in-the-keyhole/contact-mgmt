define(['marionette', 'templates'], function (Marionette, Templates) {
    return Marionette.ItemView.extend({
        editable: true,

        template: Templates.contact,

        className: 'well span3 contact-card editable',

        ui: {
            editButton: '#edit-button',
            editIcon: 'i'
        },

        events: {
            'mouseenter': 'showEditControl',
            'mouseleave': 'hideEditControl',
            'click #edit-button': 'toggleEditMode'
        },

        showEditControl: function () {
            if (this.editable) {
                this.ui.editIcon.addClass('icon-pencil')
                this.ui.editIcon.removeClass('icon-repeat')
            } else {
                this.ui.editIcon.removeClass('icon-pencil');
                this.ui.editIcon.addClass('icon-repeat')
            }
            this.ui.editButton.show();
        },

        hideEditControl: function () {
            this.ui.editButton.hide();
        },

        toggleEditMode: function (e) {
            var _this = this;
            require(['flip', 'jeditable'], function () {
                if (_this.editable) {
                    _this.flipToEdit();
                } else {
                    console.log('revert')
                    _this.revertFlip();
                }
            });
        },
        flipToEdit: function () {
            this.$el.flip({
                direction: 'tb'
            });

            this.$('span.x').addClass('edit')

            $('.edit').editable(function (value, settings) {
                console.log(this);
                console.log(value);
                return(value);
            }, {
            });
            this.editable = false;
            this.toggleClasses();
        },
        revertFlip: function() {
            this.$el.revertFlip();
            this.editable = true;
            this.toggleClasses();
        },
        toggleClasses : function() {
            this.showEditControl();
            if (this.editable) {
                this.$el.removeClass('editable');
                this.$el.addClass('saveable');
            } else {
                this.$el.removeClass('saveable');
                this.$el.addClass('editable');
            }
        }
    })
})