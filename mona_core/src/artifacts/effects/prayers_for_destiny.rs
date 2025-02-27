use crate::artifacts::artifact_trait::{ArtifactMetaData, ArtifactTrait};
use crate::artifacts::ArtifactSetName;
use crate::artifacts::effect::{ArtifactEffect, ArtifactEffectNone};
use crate::artifacts::effect_config::ArtifactEffectConfig;
use crate::attribute::Attribute;
use crate::character::character_common_data::CharacterCommonData;

pub struct PrayersForDestiny;

impl ArtifactTrait for PrayersForDestiny {
    fn create_effect<A: Attribute>(_config: &ArtifactEffectConfig, _character_common_data: &CharacterCommonData) -> Box<dyn ArtifactEffect<A>> {
        Box::new(ArtifactEffectNone)
    }

    #[cfg(not(target_family = "wasm"))]
    const META_DATA: ArtifactMetaData = ArtifactMetaData {
        name: ArtifactSetName::PrayersForDestiny,
        name_mona: "prayersForDestiny",
        chs: "祭水之人",
        flower: None,
        feather: None,
        sand: None,
        goblet: None,
        head: Some("祭水礼冠"),
        star: (3, 4),
        effect1: Some("受到的水元素附着效果的持续时间减少40%"),
        effect2: None,
        effect3: None,
        effect4: None,
        effect5: None,
    };
}
