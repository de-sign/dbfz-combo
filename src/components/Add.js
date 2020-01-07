const oCategory = {
    direction: 'universal',
    move: 'universal',
    universal: 'universal',

    normal: 'character',
    special: 'character',
    super: 'character',

    assist: 'teammate',
    dhc: 'teammate'
};

module.exports = {

    props: {
        sCharacter: String
    },
    data() {
        const oData = {
            oMenu: Object.assign(
                {},
                data.universal,
                data.character[ this.sCharacter ],
                data.teammate
            )
        };
        delete oData.oMenu.label;
        return oData;
    },

    methods: {
        click(sType, nIndex) {
            this.$emit('add', {
                sCategory: oCategory[sType],
                sType,
                nIndex
            } );
        }
    },
    
    template: `
        <div href="#" class="v-add">
            <slot></slot><!--
            --><div class="uk-padding-remove" uk-dropdown>
                <div class="uk-height-max-large uk-overflow-auto uk-padding-small">
                    <ul
                        v-for="(aCurrentMenu, sMenu) in oMenu"
                        class="uk-nav uk-dropdown-nav uk-margin-small"
                    >
                        <li class="uk-nav-header">{{ sMenu }}</li>
                        <li class="uk-nav-divider"></li>
                        <li
                            v-for="(oChoice, nIndex) in aCurrentMenu"
                            v-show="!oChoice.sCharacter || oChoice.sCharacter != sCharacter"
                        >
                            <a 
                                @click="click(sMenu, nIndex)"
                                href="#"
                            >
                                {{ oChoice.label }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `
};