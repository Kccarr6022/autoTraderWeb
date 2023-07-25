FROM python:3.9
WORKDIR /api
COPY . /api/
RUN pip install --no-cache-dir --upgrade -r /api/requirements.txt
EXPOSE 5000
CMD ["uvicorn", "api:app", "--host", "0.0.0.0", "--port", "5000"]