use crate::artifacts::ArtifactSetName;
use crate::attribute::{Attribute, AttributeName};
use crate::buffs::{Buff, BuffConfig};
use crate::buffs::buff::BuffMeta;
use crate::buffs::buff_meta::{BuffFrom, BuffGenre, BuffImage, BuffMetaData};
use crate::buffs::buff_name::BuffName;
use crate::common::item_config_type::{ItemConfig, ItemConfigType};
use crate::enemies::Enemy;

pub struct BuffDeepwoodMemories4 {
    pub rate: f64,
}

impl<A: Attribute> Buff<A> for BuffDeepwoodMemories4 {
    fn change_attribute(&self, attribute: &mut A) {
        attribute.set_value_by(AttributeName::ResMinusDendro, "BUFF: 深林的记忆4", self.rate * 0.3);
    }
}

impl BuffMeta for BuffDeepwoodMemories4 {
    #[cfg(not(target_family = "wasm"))]
    const META_DATA: BuffMetaData = BuffMetaData {
        name: BuffName::DeepwoodMemories4,
        chs: "",
        image: BuffImage::Artifact(ArtifactSetName::DeepwoodMemories),
        genre: BuffGenre::Artifact,
        description: Some(""),
        from: BuffFrom::Artifact(ArtifactSetName::DeepwoodMemories)
    };

    #[cfg(not(target_family = "wasm"))]
    const CONFIG: Option<&'static [ItemConfig]> = Some(&[
        ItemConfig {
            name: "rate",
            title: "b41",
            config: ItemConfigType::Float { min: 0.0, max: 1.0, default: 1.0 }
        }
    ]);

    fn create<A: Attribute>(b: &BuffConfig) -> Box<dyn Buff<A>> {
        let rate = match *b {
            BuffConfig::DeepwoodMemories4 { rate } => rate,
            _ => 0.0
        };
        Box::new(BuffDeepwoodMemories4 { rate })
    }
}