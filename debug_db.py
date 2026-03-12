import sqlite3
import json

def read_db():
    try:
        conn = sqlite3.connect('backend/.tmp/data.db')
        cur = conn.cursor()
        
        # Check tables
        cur.execute("SELECT name FROM sqlite_master WHERE type='table';")
        tables = [t[0] for t in cur.fetchall()]
        print(f"Tables: {tables}")
        
        if 'articles' in tables:
            cur.execute("SELECT count(*) FROM articles")
            count = cur.fetchone()[0]
            print(f"Article count: {count}")
            
            cur.execute("SELECT title, slug FROM articles LIMIT 5")
            articles = cur.fetchall()
            for art in articles:
                print(f" - Title: {art[0]}, Slug: {art[1]}")
        else:
            # Strapi v4/v5 usually uses plural 'articles' or internal names
            # Let's search for table names containing 'article'
            article_tables = [t for t in tables if 'article' in t.lower()]
            print(f"Potential article tables: {article_tables}")
            
            for table in article_tables:
                try:
                    cur.execute(f"SELECT count(*) FROM {table}")
                    count = cur.fetchone()[0]
                    print(f"Table {table} count: {count}")
                except:
                    pass
                    
        # Check users
        user_tables = [t for t in tables if 'admin_user' in t.lower()]
        for table in user_tables:
            cur.execute(f"SELECT id, email FROM {table}")
            users = cur.fetchall()
            print(f"Users in {table}: {users}")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    read_db()
