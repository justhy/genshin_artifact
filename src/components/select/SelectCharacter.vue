<template>
    <el-select
        :value="value"
        @input="$emit('input', $event)"
        placeholder="角色"
        size="small"
    >
        <el-option-group
            v-for="(group, elementName) in characterByElement"
            :key="elementName"
            :label="element2Chs(elementName)"
        >
            <el-option
                v-for="character in group"
                :key="character.name"
                :label="character.chs"
                :value="character.name"
            >
                <div class="option-item flex-row">
                    <img :src="character.avatar">
                    <span :style="{ color: getColor(character.star) }">{{ character.chs }}</span>
                </div>
            </el-option>
        </el-option-group>
    </el-select>
</template>

<script>
import { characterByElement } from "@character";
import qualityColors from "@const/quality_colors";

export default {
    name: "SelectCharacter",
    props: ["value"],
    data() {
        return {
            characterByElement
        }
    },
    methods: {
        element2Chs(element) {
            switch(element) {
                case "Pyro":
                    return "火";
                case "Cryo":
                    return "冰";
                case "Dendro":
                    return "草";
                case "Electro":
                    return "雷";
                case "Anemo":
                    return "风";
                case "Geo":
                    return "岩";
                case "Hydro":
                    return "水";
            }
        },

        getColor(star) {
            return qualityColors[star - 1];
        }
    }
}
</script>

<style lang="scss" scoped>
.option-item {
    img {
        width: 28px;
        height: 28px;
        margin-right: 8px;
        border-radius: 50%;
    }
}
</style>