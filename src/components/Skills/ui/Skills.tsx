import classes from "./Skills.module.scss";

export const Skills = () => {
    return (
        <div className={classes.Skills}>
            <div className={classes.title}>Ключевые навыки</div>
            <div className="container">
                <div className={classes.tableHeader}>
                    <div>Дизайн</div>
                    <div>Разработка</div>
                </div>
            </div>
            <div className={classes.tableDesktop}>
                <table>
                    <tbody>
                        <tr>
                            <div>Figma</div>
                            <div>Adobe Illustrator</div>
                        </tr>
                        <tr>
                            <div>Adobe Photoshop</div>
                            <div>Premiere Pro</div>
                        </tr>
                        <tr>
                            <div>React</div>
                            <div>TypeScript</div>
                        </tr>
                        <tr>
                            <div>Redux</div>
                            <div>Jest</div>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={classes.tableMobile}>
                <table>
                    <tbody>
                        <tr>
                            <div>Figma</div>
                        </tr>
                        <tr>
                            <div>Adobe Illustrator</div>
                        </tr>
                        <tr>
                            <div>Adobe Photoshop</div>
                        </tr>
                        <tr>
                            <div>Premiere Pro</div>
                        </tr>
                        <tr>
                            <div>TypeScript</div>
                        </tr>
                        <tr>
                            <div>React</div>
                        </tr>
                        <tr>
                            <div>Jest</div>
                        </tr>
                        <tr>
                            <div>Redux</div>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
