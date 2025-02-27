use mona::character::CharacterName;
use mona::character::skill_config::CharacterSkillConfig;

#[derive(Debug)]
pub struct MonaObjectDamageConfig {
    pub character_name: CharacterName,
    pub skill_index: usize,
    pub skill_config: CharacterSkillConfig,
    pub var_name: String,
    pub is_transformative: bool,
}
