interface NutrientBarProps {
    label: string;
    consumed: number;
    target: number;
    color: string;
}

const NutrientBar: React.FC<NutrientBarProps> = ({label, consumed, target, color}) => {
    const percentage = Math.min((consumed / target) * 100, 100);
    return (
        <div style={{textAlign: 'center', width: 100}}>
            <div style={{fontSize: 14, color: '#666', marginBottom: 4}}>{label}</div>
            <div style={{background: '#eee', height: 4, borderRadius: 2, overflow: 'hidden', marginBottom: 4}}>
                <div style={{width: `${percentage}%`, height: '100%', background: color}}></div>
            </div>
            <div style={{fontSize: 14, fontWeight: 500}}>{consumed} / {target}g</div>
        </div>
    );
};

export function NutrientBarWidget() {
    return (
        <div style={{display: 'flex', gap: 24, justifyContent: 'center'}}>
            <NutrientBar label="Protein" consumed={42} target={77} color="#e78b5f"/>
            <NutrientBar label="Fat" consumed={20} target={40} color="#f1c74f"/>
            <NutrientBar label="Carbs" consumed={85} target={136} color="#6ebc7d"/>
        </div>
    );
}